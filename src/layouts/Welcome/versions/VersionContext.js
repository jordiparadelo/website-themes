import React, { useContext, useEffect } from 'react';
// Components
import { Default } from '../Welcome'
import Welcome_v1 from './Welcome_v1/Welcome_v1'
import Welcome_v2 from './Welcome_v2/Welcome_v2'
import Welcome_v3 from './Welcome_v3/Welcome_v3'

// Context
const VersionContext = React.createContext()

// Custom Hook
export function useVersionContext() {
    return useContext(VersionContext)
}

// Provider
export const VersionProvider = ({ version }) => {

    // Dynamic Import of Styles
    useEffect(() => {
        if (version && WELCOME_VERSIONS[version] !== undefined) {
            // INFO: Only for testing purposes - then the styles will be provide by the same global style
            // Import Global Styles from selected version
            // import(`../../../styles/versions/global_v${version}.scss`)

            // Import Global Styles from selected version
            import(`./Welcome_v${version}/Welcome_v${version}.scss`)
        }
    }, [version])


    const WELCOME_VERSIONS = {
        1: () => <Welcome_v1 />,
        2: () => <Welcome_v2 />,
        3: () => <Welcome_v3 />,
    };
    const VERSION_SELECTED = WELCOME_VERSIONS[version] ? WELCOME_VERSIONS[version]() : <Default />

    return (
        <VersionContext.Provider value={version}> {VERSION_SELECTED}</VersionContext.Provider>
    )

}