import BodyPart from "../models/BodyPart";
import Exercise from "../models/Exercise";
import UserTarget from "../models/UserTarget";

export const BODYPARTS = [
    new BodyPart(
        'bp0',
        'Chest',
        'https://www.kingofthegym.com/wp-content/uploads/2012/11/bench-press-tips_jacked-guy-benching.jpg',
        null
    ),

    new BodyPart(
        'bp1',
        'Back',
        'https://marathonhandbook.com/wp-content/uploads/2022/09/How-Many-Pull-Ups-Should-I-Be-Able-To-Do.webp',
        [
            { id: 'b1', name: 'Lats', imgUrl: 'https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2020/05/Pull-Ups-Exercise-770x500.jpg' },
            { id: 'b2', name: 'Lower_Back', imgUrl: 'https://www.thetrendspotter.net/wp-content/uploads/2020/08/Lower-Back-Exercises.jpg' },
            { id: 'b3', name: 'Middle_Back', imgUrl: 'https://breakingmuscle.com/wp-content/uploads/2022/05/shutterstock_1891430674.jpg' }
        ]
    ),

    new BodyPart(
        'bp2',
        'Abs',
        'https://www.bodybuilding.com/images/2018/april/the-best-ab-workout-for-a-six-pack-header-830x467.jpg',
        null
    ),

    new BodyPart(
        'bp3',
        'Arms',
        'https://www.bodybuilding.com/images/2019/february/arm-training-for-women-header-830x467.jpg',
        [
            { id: 'a1', name: 'Biceps', imgUrl: 'https://www.bodybuilding.com/fun/images/2015/10-laws-of-biceps-training-facebook-960x540.jpg' },
            { id: 'a2', name: 'Triceps', imgUrl: 'https://barbend.com/wp-content/uploads/2020/05/Triceps-Training.jpg' },
            { id: 'a3', name: 'Forearm', imgUrl: 'http://barbend.com/wp-content/uploads/2021/10/BarBend-Article-Image-760-x-427-35.jpg' }
        ]
    ),
    new BodyPart(
        'bp4',
        'Shoulders',
        'https://www.bodybuilding.com/images/2018/june/the-3-move-shoulder-builder-header-muscletech-830x467.jpg',
        null
    ),
    new BodyPart(
        'b5',
        'Legs',
        'https://cathe.com/wp-content/uploads/2019/07/shutterstock_1043285815.jpg',
        [
            { id: 'l1', name: 'Glutes', imgUrl: 'https://breakingmuscle.com/wp-content/uploads/2022/10/Shutterstock_2212080951.jpg' },
            { id: 'l2', name: 'Hamstrings', imgUrl: 'http://www.kuvvetvekondisyon.com/wp-content/uploads/2014/03/Leg-curl.jpg' },
            { id: 'l3', name: 'Quadriceps', imgUrl: 'https://assets.sweat.com/html_body_blocks/images/000/015/052/original/LegExercises_en8c825a9da07728466075a593cb53aacc.jpg?1573170579' },
            { id: 'l4', name: 'Calves', imgUrl: 'https://cdn.shopify.com/s/files/1/1633/7705/articles/dumbbell_calf_exercises_2000x.jpg?v=1654116712' }
        ]
    )
];

// export const EXERCISES = [
//     new Exercise(
//         'ex1',
//         'Bench press',
//         ['bp0'],
//         'Barbell',
//         'Hard',
//         [
//             'Lie down on the bench, keep your shoulder blades together',
//             'Grip a barbell with hands a little wider than shoulder width',
//             'Press your feet strongly into the ground to ensure your position is stable',
//             'Push forward your chest',
//             'Take the barbell out of stands and slowly lower the barbell towards your chest',
//             'Keep your elbows at a 45 degree angle to your torso',
//             'When you touch the chest, push the barbell to starting',

//         ]

//         )
// ]