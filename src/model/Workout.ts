export interface WorkoutWrapper {
    data: Workout;
}

export interface Workout {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    difficulty: string;
    duration: number;
    goal: Goal;
    interests: Interest[];
    coverImageFilename: string;
    introVideoFilename: string;
    availableLocales: string[];
    approved: boolean;
    containsRun: boolean;
    isNew: boolean;
    deliveryType: string;
    streaming: boolean;
    updatedAt: Date;
    createdAt: Date;
    coverImageUrl: string;
    introVideoUrl: string;
    trainer: Trainer;
    sections: Section[];
    favourited: boolean;
}

export interface Goal {
    id: string;
    name: string;
}

export interface Interest {
    id: string;
    name: string;
}

export interface Trainer {
    id: string;
    name: string;
    sex: string;
    profileImageUrl: string;
}

export interface Cue {
    id: string;
    order: number;
    audioUrl: string;
}

export interface Exercise {
    id: string;
    order: number;
    kind: string;
    templateId: string;
    title: string;
    subtitle: string;
    scorePerUnit: number;
    amount: number;
    countdown: boolean;
    loopVideo: boolean;
    imageUrl: string;
    pauseImageUrl: string;
    spokenTitleUrl: string;
    previewVideoLength: number;
    videoLength: number;
    hasAudioTrack: boolean;
    seekable: boolean;
    previewVideoUrl: string;
    videoUrl: string;
    spokenDuration: string;
    cues: Cue[];
}

export interface Section {
    id: string;
    order: number;
    kind: string;
    title: string;
    duration: number;
    exercises: Exercise[];
}
