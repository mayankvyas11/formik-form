
import './App.css';
import React from 'react';
import { Formik } from 'formik';
import { useFormik } from 'formik';
import {signUpSchema} from './schemas/index'
  
  import {Box,
  Input,
  InputLeftAddon,
  InputGroup,
  Stack,
  Button,
  FormControl,
} from '@chakra-ui/react'

const initialValues = {
 name : '',
 email : '',
 password : '',
 confirm_password : ''
}
function App() {
  const {values ,errors,   handleBlur , handleChange , handleSubmit , touched} = useFormik({
    initialValues: initialValues ,
    validationSchema : signUpSchema,
    onSubmit : (values , action)=>{
      console.log(values);
      action.resetForm();
    }
  })

  
  return (
      <Formik>
      <Box maxW='sw' borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor={'whitesmoke'} width={900} height={450} padding={10} margin={160}>
        <FormControl onSubmit={handleSubmit}>
         <Stack spacing={7}>
      <InputGroup>
    <InputLeftAddon children='Name' />
    <Input
     type='name' placeholder='name' size='lg' id='name'name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
     { errors.name && touched.name ? (<p>{errors.name}</p> ) : null}
    </InputGroup>
    <InputGroup>
    <InputLeftAddon children='Email' />
    <Input 
    type='email' placeholder='email' name='email' id='email'value={values.email} onChange={handleChange} onBlur={handleBlur}/>
     { errors.email && touched.email ? (<p>{errors.email}</p>) : null}
    </InputGroup>
    <InputGroup>
    <InputLeftAddon children='Password' />
    <Input
     type='password' placeholder='password' name='password'id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
     { errors.password && touched.password ? (<p>{errors.password}</p>) : null}
    </InputGroup>
    <InputGroup>
    <InputLeftAddon children='Confirm Password' />
    <Input
     type='password' placeholder='confirm It' name='confirm_password'id='confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
    { errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) : null}
    </InputGroup>
    </Stack >
    <Button colorScheme='blue' marginTop={12} type='submit'>Register</Button>
    </FormControl>
    </Box>
  </Formik>
  
  );
}

export default App;
