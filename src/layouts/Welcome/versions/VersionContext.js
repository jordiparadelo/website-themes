import React, { useContext } from 'react';
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