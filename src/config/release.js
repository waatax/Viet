import packageInfo from '../../package.json';

export const APP_VERSION = packageInfo.version;
export const BUILD_REVISION = import.meta.env.BUILD_REVISION || 'local';
