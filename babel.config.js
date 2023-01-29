module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    // This needs to be mirrored in tsconfig.json
                    '@assets': './src/assets',
                    '@api': './src/api',
                    '@components': './src/components',
                    '@screens': './src/screens',
                    '@store': './src/store',
                    '@styles': './src/styles',
                    '@utils': './src/utils',
                    '@types': './src/types',
                },
            },
        ],
    ],
};
