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

    // Dynamic Import of Styles
    useEffect(() => {
        if (version && WELCOME_VERSIONS[version] !== undefined) {
            import(`./Welcome_v${version}/Welcome_v${version}.scss`)
        }
    }, [version])


    const WELCOME_VERSIONS = {
        1: () => <FeaturesProperties_v1 />,
        2: () => <FeaturesProperties_v2 />,
        3: () => <FeaturesProperties_v3 />,
    };
    const VERSION_SELECTED = WELCOME_VERSIONS[version] ? WELCOME_VERSIONS[version]() : <Default />

    return (
        <VersionContext.Provider value={version}> {VERSION_SELECTED}</VersionContext.Provider>
    )

}