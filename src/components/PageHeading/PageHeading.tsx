import { Heading } from "@chakra-ui/react"

const PageHeading = ({heading} : {heading: string}) => {
    return (
        <Heading paddingTop="20px">
            {heading}
        </Heading>
    )
}

export default PageHeading;