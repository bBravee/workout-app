import BodyPart from "../models/BodyPart";

export const BODYPARTS = [
    new BodyPart(
        'bp0',
        'Chest',
        'chest',
        // 'https://images.unsplash.com/photo-1652363722833-509b3aac287b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        null
    ),

    new BodyPart(
        'bp1',
        'Back',
        'back',
        // 'https://images.unsplash.com/photo-1597347316205-36f6c451902a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVsbCUyMHVwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        [
            { id: 'b1', name: 'Lats', imgUrl: 'lats' },
            { id: 'b2', name: 'Lower_Back', imgUrl: 'lower_back' },
            { id: 'b3', name: 'Middle_Back', imgUrl: 'middle_back' }
        ]
    ),

    new BodyPart(
        'bp2',
        'Abdominals',
        'abdominals',
        // 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        null
    ),

    new BodyPart(
        'bp3',
        'Arms',
        'arms',
        // 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        [
            { id: 'a1', name: 'Biceps', imgUrl: 'biceps' },
            { id: 'a2', name: 'Triceps', imgUrl: 'triceps' },
            { id: 'a3', name: 'Forearm', imgUrl: 'forearm' }
        ]
    ),
    new BodyPart(
        'b5',
        'Legs',
        'legs',
        // 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        [
            { id: 'l1', name: 'Glutes', imgUrl: 'glutes' },
            { id: 'l2', name: 'Hamstrings', imgUrl: 'hamstrings' },
            { id: 'l3', name: 'Quadriceps', imgUrl: 'quadriceps' },
            { id: 'l4', name: 'Calves', imgUrl: 'calves' }
        ]
    )
];
