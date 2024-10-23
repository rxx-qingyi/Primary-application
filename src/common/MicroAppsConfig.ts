

export const MicroAppsConfigs = [
    {
      name: 'my-react-app',
      entry: 'https://localhost:3001/',
      container: '#container',
      activeRule: '/app-react',
    },
    {
      name: 'argument-management',
      entry: `https://home.dev.gs-robot.com/argument-management`,
      container: '#container',
      activeRule: '/argument'
    },
    {
      name:'upgrade-management',
      entry: `https://home.dev.gs-robot.com/upgrade-management`,
      container: '#container',
      activeRule: '/upgrade'
    },
]

export const getAllMicroAppsRoute = () => {
  return MicroAppsConfigs.map(config => config.activeRule)
}