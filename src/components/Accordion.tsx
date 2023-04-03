import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import { accordionAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

// define the base styles of the component
const baseStyle = definePartsStyle({
    container: defineStyle({
        border: '1px',
        borderRadius: '5px',
    }),
    button: defineStyle({
        _hover: {
            bg: 'inherit',
        }
    }),
    panel: defineStyle({

    }),
})

export const AccordionTheme = defineMultiStyleConfig({
    baseStyle,
})