export const mockData = [
    {
        approved: true,
        availableLocales: ['cs', 'de', 'en', 'es', 'fr', 'pl', 'ru', 'tr'],
        containsRun: false,
        coverImageFilename: 'OPT_V2_AnthonyPlanksAllDayBG.jpg',
        deliveryType: 'download',
        description: 'Strong core. Strong everything.',
        difficulty: 'beginner',
        duration: 860,
        favourited: true,
    },
];

export interface IMockData {
    approved: boolean;
    availableLocales: string[];
    containsRun: boolean;
    coverImageFilename: string;
    deliveryType: string;
    description: string;
    difficulty: string;
    duration: number;
    favourited: boolean;
}

export const mockDataAccount = {
    name: 'Dzmitry Smartsau',
    location: 'Belarus',
};

export interface IMockDataAccount {
    name: string;
    location: string;
}
