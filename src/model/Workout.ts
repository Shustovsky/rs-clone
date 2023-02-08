export interface WorkoutWrapper {
    data: Workout;
}

export interface Workout {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    calories: number;
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
    subtitle: string | null;
    scorePerUnit: number;
    amount: number;
    countdown: boolean;
    loopVideo: boolean;
    imageUrl: string;
    pauseImageUrl: string | null;
    spokenTitleUrl: string | null;
    previewVideoLength: number | null;
    videoLength: number | null;
    hasAudioTrack: boolean;
    seekable: boolean;
    previewVideoUrl: string | null;
    videoUrl: string | null;
    spokenDuration: string;
    cues: Cue[];
}

export interface Section {
    id: string;
    order: number;
    kind: string;
    title: string | null;
    duration: number;
    exercises: Exercise[];
}
