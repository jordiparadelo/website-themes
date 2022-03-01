import React, { useContext, useEffect } from 'react';
// Components
import { Default } from '../Navbar'
import Navbar_v1 from './Navbar_v1/Navbar_v1'
import Navbar_v2 from './Navbar_v2/Navbar_v2'
import Navbar_v3 from './Navbar_v3/Navbar_v3'

// Context
const VersionContext = React.createContext()

// Custom Hook
export function useVersionContext() {
    return useContext(VersionContext)
}

// Provider
export const VersionProvider = ({ version }) => {
    const FEATURES_PROPERTIES_VERSIONS = {
        1: () => <Navbar_v1 />,
        2: () => <Navbar_v2 />,
        3: () => <Navbar_v3 />,
    };

    // Dynamic Import of Styles
    useEffect(() => {
        if (version && FEATURES_PROPERTIES_VERSIONS[version] !== undefined) {
            // INFO: Only for testing purposes - then the styles will be provide by the same global style
            // Import Global Styles from selected version
            // import(`../../../styles/versions/global_v${version}.scss`)

            // Import Component Styles from selected version
            import(`./Navbar_v${version}/Navbar_v${version}.scss`)
        }
    }, [version])

    const VERSION_SELECTED = FEATURES_PROPERTIES_VERSIONS[version] ? FEATURES_PROPERTIES_VERSIONS[version]() : <Default />

    return (
        <VersionContext.Provider value={version}> {VERSION_SELECTED}</VersionContext.Provider>
    )

}