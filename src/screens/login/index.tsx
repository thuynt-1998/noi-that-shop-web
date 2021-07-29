import React, { FC } from 'react' 
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, createStyles, TextField, Theme, withStyles, WithStyles } from '@material-ui/core';

import Background from './components/Background'

const registerLogin = yup.object().shape({
    username: yup.string().required("Số điện thoại là bắt buộc"),
    password: yup.string().required("Mật khẩu là bắt buộc"),

})

interface Props extends WithStyles<typeof styles> {
   
}
const LoginScreen:FC<Props> = ({classes})=>{
    const {  formState:{errors}, handleSubmit } = useForm({
        resolver: yupResolver(registerLogin),
        defaultValues: { username: "", password: "" }
    });
    return  <Background title={"Đăng nhập"}>
        <TextField
            name="username"
            defaultValue=""
            error={errors.username ? true : false}
            margin="normal"
            required
            fullWidth
            label="Số điện thoại"
            placeholder="Nhập số điện thoại..."
            helperText={errors.username ? errors.username.message : ""}
            InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
        />
        <TextField
            name="password"
            defaultValue=""
            error={errors.password ? true : false}
            margin="normal"
            required
            fullWidth
            label="Mật khẩu"
            placeholder="Nhập mật khẩu..."
            helperText={errors.password ? errors.password.message : ""}
            InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
            type="password"
        />
         <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit(()=>{})}
        >
           { "Đăng nhập"}
        </Button>

    
</Background>
}


const styles = (theme: Theme) => createStyles({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    resize :{
        fontSize:16
    }
})
export default withStyles(styles)(LoginScreen)

