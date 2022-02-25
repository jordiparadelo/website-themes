import React, { useContext, useEffect } from 'react';
// Components
import { Default } from '../Discover'
import Discover_v1 from './Discover_v1/Discover_v1'
import Discover_v2 from './Discover_v2/Discover_v2'
import Discover_v3 from './Discover_v3/Discover_v3'

// Context
const VersionContext = React.createContext()

// Custom Hook
export function useVersionContext() {
    return useContext(VersionContext)
}

// Provider
export const VersionProvider = ({ version }) => {
    const FEATURES_PROPERTIES_VERSIONS = {
        1: () => <Discover_v1 />,
        2: () => <Discover_v2 />,
        3: () => <Discover_v3 />,
    };

    // Dynamic Import of Styles
    useEffect(() => {
        if (version && FEATURES_PROPERTIES_VERSIONS[version] !== undefined) {
            // INFO: Only for testing purposes - then the styles will be provide by the same global style
            // Import Global Styles from selected version
            // import(`../../../styles/versions/global_v${version}.scss`)

            // Import Component Styles from selected version
            import(`./Discover_v${version}/Discover_v${version}.scss`)
        }
    }, [version])

    const VERSION_SELECTED = FEATURES_PROPERTIES_VERSIONS[version] ? FEATURES_PROPERTIES_VERSIONS[version]() : <Default />

    return (
        <VersionContext.Provider value={version}> {VERSION_SELECTED}</VersionContext.Provider>
    )

}