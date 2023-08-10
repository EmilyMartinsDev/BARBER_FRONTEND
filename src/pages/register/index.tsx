import Head from 'next/head'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import { useState } from 'react'
import {
  Flex,
  Text,
  Center,
  Input,
  Button


} from '@chakra-ui/react'
import Link from 'next/link'
export default function Register(){
    
  const [email, setEmail] = useState('')
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

 function handleRegister(){
    
 }
  return (
    <>
    <Head>
      <title>Barber pro - Crie sua conta</title>
    </Head>
     <Flex color='white' backgroundColor='barber.900' height='100vh' alignItems='center' justifyContent='center'>
        <Flex width={640} direction='column' p={14} rounded={8}>
            <Center p={4}>
                <Image width={240} src={logo} quality={100} objectFit='fill' alt='logo barberpro'/>
            </Center>

            <Input
            background='barber.400'
            variant='filled'
            size='lg'
            type='text'
            placeholder='Nome da Barbearia'
            _hover={{bg: 'none'}}
            mb={3}
            value={name}
            onChange={e=> setName(e.target.value)}
            />
            <Input
            background='barber.400'
            variant='filled'
            size='lg'
            type='email'
            placeholder='email'
            _hover={{bg: 'none'}}
            mb={3}
            value={email}
            onChange={e=> setEmail(e.target.value)}
            />
            <Input
            background='barber.400'
            variant='filled'
            size='lg'
            _hover={{bg: 'none'}}
            type='password'
            placeholder='************'
            mb={6}
            value={password}
            onChange={e=> setPassword(e.target.value)}
            />
            <Button
            onClick={handleRegister}
            background='button.cta'
            mb={6}
            color='gray.900'
            size='lg'
            _hover={{bg: "#ffb13e"}}
            >Acessar
            </Button>
            <Center mt={2}>
                <Link href='/login'>
                    <Text cursor='pointer' color='white'>Já possui uma conta? <strong>Faça seu login</strong></Text>
                </Link>
            </Center>
        </Flex>
    </Flex>   
    </>
  )
}
