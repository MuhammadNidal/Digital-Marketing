export const containerVariants =(delay = 0)=>({
    "offscreen":{
        opacity:0,
        y:30
    },
    "onscreen":{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            duration:2,
            delay
        }
    }
})

export const tagVariants= {
    "offscreen":{
        opacity:0,
        y:10
    },
    "onscreen":{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            duration:2,
        }
    }
}

export const titleVariants= {
    "offscreen":{
        opacity:0,
        y:30
    },
    "onscreen":{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            duration:2.2,
        }
    }
}

export const desVariants= {
    "offscreen":{
        opacity:0,
        y:20
    },
    "onscreen":{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            duration:1.7,
            delay:1
        }
    }
}
export const textVariants= {
    "offscreen":{
        opacity:0,
        y:20
    },
    "onscreen":{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            duration:1.5,
            delay:1
        }
    }
}