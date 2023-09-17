import React from "react";

import { ChakraProvider, Box, Container} from "@chakra-ui/react";

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <ChakraProvider>
            <Box bg="#F9FAFB" minH="100vh">
                <Container minW="90%">
                    {children}
                </Container>
            </Box>
            
        </ChakraProvider>
       
    );
}

export default Layout;