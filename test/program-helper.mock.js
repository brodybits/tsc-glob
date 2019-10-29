module.exports={
    getOptions: function () {
        return {unknown: []}
    },
    resolveTSFiles: function () {
        return ['src/User.ts']
    },
    getTSCCommand: function () {
        return 'tsc'
    }
};