import React, { useContext, useEffect } from 'react';
// Components
import { Default } from '../Newsletter'
import Newsletter_v1 from './Newsletter_v1/Newsletter_v1'
import Newsletter_v2 from './Newsletter_v2/Newsletter_v2'
import Newsletter_v3 from './Newsletter_v3/Newsletter_v3'

// Context
const VersionContext = React.createContext()

// Custom Hook
export function useVersionContext() {
    return useContext(VersionContext)
}

// Provider
export const VersionProvider = ({ version }) => {
    const FEATURES_PROPERTIES_VERSIONS = {
        1: () => <Newsletter_v1 />,
        2: () => <Newsletter_v2 />,
        3: () => <Newsletter_v3 />,
    };

    // Dynamic Import of Styles
    useEffect(() => {
        if (version && FEATURES_PROPERTIES_VERSIONS[version] !== undefined) {
            // INFO: Only for testing purposes - then the styles will be provide by the same global style
            // Import Global Styles from selected version
            // import(`../../../styles/versions/global_v${version}.scss`)

            // Import Component Styles from selected version
            import(`./Newsletter_v${version}/Newsletter_v${version}.scss`)
        }
    }, [version])

    const VERSION_SELECTED = FEATURES_PROPERTIES_VERSIONS[version] ? FEATURES_PROPERTIES_VERSIONS[version]() : <Default />

    return (
        <VersionContext.Provider value={version}> {VERSION_SELECTED}</VersionContext.Provider>
    )

}