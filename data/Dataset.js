import BodyPart from "../models/BodyPart";

export const BODYPARTS = [
    new BodyPart(
        'bp0',
        'Chest',
        'chest',
        null
    ),

    new BodyPart(
        'bp1',
        'Back',
        'back',
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
        null
    ),

    new BodyPart(
        'bp3',
        'Arms',
        'arms',
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
        [
            { id: 'l1', name: 'Glutes', imgUrl: 'glutes' },
            { id: 'l2', name: 'Hamstrings', imgUrl: 'hamstrings' },
            { id: 'l3', name: 'Quadriceps', imgUrl: 'quadriceps' },
            { id: 'l4', name: 'Calves', imgUrl: 'calves' }
        ]
    )
];
