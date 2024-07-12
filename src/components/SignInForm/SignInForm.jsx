import css from './SignInForm.module.css';
import Logo from '../shared/Logo/Logo';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import clsx from 'clsx';
import { LoginUserSchema } from '../../validation/auth';

const SignInForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LoginUserSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    console.log('Form Data:', data);
    dispatch(logIn(data));
    reset();
  };

  return (
    <div className={css.mainLoginContainer}>
      <Logo />
      <div className={css.loginFormContainer}>
        <h1 className={css.title}>Sign in</h1>
        <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={css.fieldLabel} htmlFor="email">
            Email
          </label>
          <div className={css.inputField}>
            <input
              className={clsx(css.input, { [css.error]: errors.email })}
              type="email"
              id="email"
              {...register('email')}
              placeholder="Enter your email"
              autoComplete="on"
            />
            {errors.email && (
              <span className={css.errors}>{errors.email.message}</span>
            )}
          </div>
          <label className={css.fieldLabel}>Password</label>

          <div className={css.inputField}>
            <input
              className={clsx(css.input, { [css.error]: errors.password })}
              type="password"
              {...register('password')}
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className={css.errors}>{errors.password.message}</span>
            )}
          </div>
          <button className={css.button} type="submit">
            Sign In
          </button>
        </form>
        <p className={css.afterDescription}>
          Don’t have an account?
          <NavLink className={css.link} to={'/signup'}>
            {' '}
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
