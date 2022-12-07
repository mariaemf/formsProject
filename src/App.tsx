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
  Checkbox,
} from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh">
      <Center
        as="header" //div header centalizada
        h={150} //150 px
        bg="pink.200" //background
        color="pink.600"
        fontWeight="bold"
        fontSize="35"
        pb="8"
      >
        Formulário
      </Center>
      <Flex
        align="Center"
        justify="center"
        bg="purple.100"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="pink.50" //background color
          top={100} //topo
          position="absolute"
          borderRadius={5}
          p="6" // padding (quando tem aspas bast amultiplicar por 4 = 6x4 = 24)
          boxShadow="0 1px 2px #e23bc3"
        >
          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome" color="pink.600">
                  Nome Completo{" "}
                </FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email" color="pink.600">
                  Seu E-mail{" "}
                </FormLabel>
                <Input id="email" type="email" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc" color="pink.600">
                  Data de Nascimento
                </FormLabel>
                <Input id="nasc" type="date" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="naturalidade" color="pink.600">
                  Naturalidade
                </FormLabel>
                <Input id="natural" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="celular" color="pink.600">
                  Celular
                </FormLabel>
                <Input id="cel" type="number" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="telefone" color="pink.600">
                  Telefone
                </FormLabel>
                <Input id="telefone" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereço" color="pink.600">
                  Endereço
                </FormLabel>
                <Input id="endereço" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade" color="pink.600">
                  Cidade
                </FormLabel>
                <Input id="cidade" />
              </Box>
            </HStack>
            <RadioGroup defaultValue="Masculino">
              <HStack spacing="24px">
                <Radio value="Masculino">Masculino</Radio>
                <Radio value="Feminino">Feminino</Radio>
                <Radio value="Outro">Outro</Radio>
              </HStack>
              <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="pink.500"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="17"
                  _hover={{ bg: "pink.900" }}
                >
                  Enviar Formulário
                </Button>
              </HStack>
            </RadioGroup>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
