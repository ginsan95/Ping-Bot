let constants = {
    port: process.env.PORT ?? 3000,
    runMinute: process.env.RUN_MINUTE ?? 29,
    runSecond: process.env.RUN_SECOND ?? 30,
    pingURLS: process.env.PING_URLS ?? '',
};

export default constants;
