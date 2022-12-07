import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh">
      <Center
        as="header" //div header centalizada
        h={150} //150 px
        bg="teal.500" //background
        color="white"
        fontWeight="bold"
        fontSize="7x1"
        pb="8"
      >
        Formulário
      </Center>
      <Flex
        align="Center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white" //background color
          top={100} //topo
          position="absolute"
          borderRadius={5}
          p="6" // padding (quando tem aspas bast amultiplicar por 4 = 6x4 = 24)
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo </FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">Seu E-mail </FormLabel>
                <Input id="email" type="email" />
              </Box>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
