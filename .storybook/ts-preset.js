// theme.ts
async function managerWebpack(config, options) {
    config.module.rules.push({
        test: /themes\/*\.(ts|tsx)$/,
        use: [{ loader: require.resolve('awesome-typescript-loader'), }],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
}

module.exports = {
    managerWebpack: managerWebpack,
};