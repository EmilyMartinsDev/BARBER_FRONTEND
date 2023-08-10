import Head from "next/head";
import {Flex, Text} from '@chakra-ui/react'

export default function Dashboard(){
    return (
     <>
        <Head>
            <title>Bem vindo a minha barbearia</title>
        </Head>
        <Flex>
            <Text>Bem vindo ao DaSHBOARD</Text>
        </Flex>

     </>
    )
}