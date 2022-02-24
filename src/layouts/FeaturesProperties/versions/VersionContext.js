import React, { useContext, useEffect } from 'react';
// Components
import { Default } from '../FeaturesProperties'
import FeaturesProperties_v1 from './FeaturesProperties_v1/FeaturesProperties_v1'
import FeaturesProperties_v2 from './FeaturesProperties_v2/FeaturesProperties_v2'
import FeaturesProperties_v3 from './FeaturesProperties_v3/FeaturesProperties_v3'

// Context
const VersionContext = React.createContext()

// Custom Hook
export function useVersionContext() {
    return useContext(VersionContext)
}

// Provider
export const VersionProvider = ({ version }) => {
    const FEATURES_PROPERTIES_VERSIONS = {
        1: () => <FeaturesProperties_v1 />,
        2: () => <FeaturesProperties_v2 />,
        3: () => <FeaturesProperties_v3 />,
    };

    // Dynamic Import of Styles
    useEffect(() => {
        if (version && FEATURES_PROPERTIES_VERSIONS[version] !== undefined) {
            // Import Global Styles from selected version
            import(`../../../styles/versions/global_v${version}.scss`)
            // Import Component Styles from selected version
            import(`./FeaturesProperties_v${version}/FeaturesProperties_v${version}.scss`)
        }
    }, [version])

    const VERSION_SELECTED = FEATURES_PROPERTIES_VERSIONS[version] ? FEATURES_PROPERTIES_VERSIONS[version]() : <Default />

    return (
        <VersionContext.Provider value={version}> {VERSION_SELECTED}</VersionContext.Provider>
    )

}