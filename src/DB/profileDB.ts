type ContactType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink:string | null,
}

export type ProfileDbTypes = {
    aboutMe: string,
    contacts: ContactType,
    status: { message: string },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    palaceOfWork: string | undefined,
    fullName:string,
    userID: number,
    photos: {
        small: string,
        large: string,
    }

}
export const profileDb = {
    items: [
        {
            aboutMe: 'I am a new',
            contacts: {
                facebook: 'Karo_O',
                website: null,
                vk: 'Karo_O',
                twitter: 'Karo_O',
                instagram: 'Karo_O',
                youtube: 'karo_O',
                github: null,
                mainLink: null,
            },
            status: {message: 'I love Rock & Roll'},
            lookingForAJob: true,
            lookingForAJobDescription: 'i need a Job',
            palaceOfWork: undefined,
            fullName: 'Andranik',
            userID: 1,
            photos: {
                small: 'UI_UX/Avatar/Andranik.png',
                large: 'UI_UX/Avatar/Andranik.png',
            }
        },
        {
            aboutMe: 'I am a new',
            contacts: {
                facebook: 'Karo_O',
                website: null,
                vk: 'Karo_O',
                twitter: 'Karo_O',
                instagram: 'Karo_O',
                youtube: 'karo_O',
                github: null,
                mainLink: null,
            },
            status: {message: 'Now is all good'},
            lookingForAJob: false,
            lookingForAJobDescription: 'i need new Job',
            palaceOfWork: 'Viva-Cell MTS',
            fullName: 'Hakob',
            userID: 2,
            photos: {
                small: 'UI_UX/Avatar/Hakob.png',
                large: 'UI_UX/Avatar/Hakob.png',
            }
        },
        {
            aboutMe: 'I am a new React Developer',
            contacts: {
                facebook: 'Karo_O',
                website: null,
                vk: 'Karo_O',
                twitter: 'Karo_O',
                instagram: 'Karo_O',
                youtube: 'karo_O',
                github: null,
                mainLink: null,
            },
            status: {message: 'Now is all good'},
            lookingForAJob: true,
            lookingForAJobDescription: 'i need new Job',
            palaceOfWork: '',
            fullName: 'Karo',
            userID: 3,
            photos: {
                small: "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
                large: "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
            }
        }
    ] as Array<ProfileDbTypes>,
}
