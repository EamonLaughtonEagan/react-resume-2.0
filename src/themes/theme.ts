import { extendTheme } from '@chakra-ui/react'
import { AccordionTheme } from '../components/Accordion'

const config = {
    initalColorMode: 'ligt',
    useSystemColorMode: 'false',
}

export const theme = extendTheme({
    config,
    components: {
        Accordion: AccordionTheme
    },
})