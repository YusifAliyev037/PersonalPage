import React, { useState } from 'react'
import Header from '../../Components/Header'
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    Image,
    IconButton,
    ButtonGroup,
    useDisclosure,
    Button,
    Tooltip,

} from "@chakra-ui/react"
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useToast,
  } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"
import { useFetchData } from '../../Hooks/useFetchData';
import { getBlogs, rmvBlogId } from '../../Services/articles';
import { shortText } from '../../Utils/shortText';
import { ROUTER } from '../../Constant/router';

 function Setting() {

    const  { isOpen, onOpen, onClose} = useDisclosure();

    const toast = useToast();

    const navigate = useNavigate();

    const  {data, loading, setData} = useFetchData({
        requestFn: () => getBlogs()
    });

    const [currentItem, setCurrentItem] = useState();

    const handleRemove = async () => {
        try{
            await rmvBlogId(currentItem?.id);

            const newFilter = data?.filter((item) => item.id != currentItem?.id);
            setData(newFilter);

            toast({
                title: "Blog deleted.",
                status: "success",
                colorScheme: "teal",
                duration: 2000,
                isClosable: true,
            });
            onClose();
        }catch(err){
            toast({
                title: err?.message,
                status: "error",
                colorScheme: "red",
                duration: 2000,
                isClosable: true,
              });
        }
    }
  return (
    <div>
        <Header />

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove Article</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight={700}>{currentItem?.title}</Text>{" "}
            <span>adindaki meqaleni silmeye eminsinizmi</span>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" onClick={handleRemove}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box py={100} px={160}>
        <Text align={"center"} fontWeight={600} fontSize="6xl">
          Setting
        </Text>

        <TableContainer>
          <Table colorScheme="whatsapp">
            <Thead>
              <Tr>
                <Th>Cover url</Th>
                <Th>Title</Th>
                <Th colSpan={2}>Desc</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data
                ?.filter((item, index) => item.id > 100)
                ?.map((item) => (
                  <Tr key={"item-" + item?.id}>
                    <Td>
                      <Image
                        width={10}
                        height={10}
                        borderRadius={10}
                        objectFit={"cover"}
                        src={item?.cover_url}
                      />
                    </Td>
                    <Tooltip label={item?.title}>
                      <Td>{shortText(item?.title, 15)}</Td>
                    </Tooltip>
                    <Td>{shortText(item?.desc, 15)}</Td>
                    <Td>
                      <ButtonGroup>
                        <IconButton
                          colorScheme="teal"
                          onClick={() =>
                            navigate(
                              ROUTER.ARTICLES_CREATE + `?blog_id=${item?.id}`
                            )
                          }
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          colorScheme="red"
                          onClick={() => {
                            setCurrentItem(item);
                            onOpen();
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>


    </div>
  )
}


export default Setting
