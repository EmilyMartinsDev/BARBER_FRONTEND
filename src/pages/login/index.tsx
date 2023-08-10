import Head from 'next/head'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContex'

import {
  Flex,
  Text,
  Center,
  Input,
  Button


} from '@chakra-ui/react'
import Link from 'next/link'
export default function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const {signIn} = useContext(AuthContext)



 async function  handleLogin(){
      try{
        await signIn({email, password})

      }catch(err){
        console.log(err)

      }
  }

  return (
    <>
    <Head>
      <title>Barber pro - Login para acessar</title>
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
            type='email'
            placeholder='email'
            _hover={{bg: 'none'}}
            value={email}
            onChange={e=> setEmail(e.target.value)}
            mb={3}
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
            onClick={handleLogin}
            background='button.cta'
            mb={6}
            color='gray.900'
            size='lg'
            _hover={{bg: "#ffb13e"}}
            >Acessar
            </Button>
            <Center mt={2}>
                <Link href='/register'>
                    <Text cursor='pointer' color='white'>Ainda não possui uma conta? <strong>Cadastre-se</strong></Text>
                </Link>
            </Center>
        </Flex>
    </Flex>   
    </>
  )
}
