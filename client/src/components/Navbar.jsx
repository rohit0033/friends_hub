import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModal from "./CreateUserModal";
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Navbar = ({ setUsers }) => {
  const { colorMode, toggleColorMode } = useColorMode();
 

  // ...
  
  return (
	<Router>
	  <Container maxW={"900px"}>
		<Box
		  px={4}
		  my={4}
		  borderRadius={5}
		  bg={useColorModeValue("gray.200", "gray.700")}
		>
		  <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
			{/* Left side */}
			<Flex
			  alignItems={"center"}
			  justifyContent={"center"}
			  gap={3}
			  display="flex"
			>
			  <Text fontSize={"20px"}>
				Give Feedback on AI application:-  
				<Link to="/path-to-your-ai-application">
				  <Text as="span" fontSize="big" color="blue.500">
					Run
				  </Text>
				</Link>
			  </Text>
			</Flex>
			<Flex gap={3} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{ base: "none", md: "block" }}
            >
              AI-person🔥
            </Text>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>
            <CreateUserModal setUsers={setUsers} />
          </Flex>
		  </Flex>
		</Box>
	  </Container>
	</Router>
  );
};
export default Navbar;
