import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormWrapper,
  Input,
  Button,
  Label,
  ErrorInput,
} from './ContactForm.styled';
import {
  patternName,
  patternNumber,
  errorName,
  errorNumber,
} from '../../utils';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';
import { Notification } from 'utils';

export const ContactForm = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      number: yup.number().positive().integer().required(),
    })
    .required();

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFormSubmit = ({ name, number }) => {
    const isFindName = contacts.find(state => state.name === name);
    if (isFindName) {
      Notification(name);
      reset();
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onFormSubmit)}>
      <Label htmlFor="name">
        Name
        <Input
          {...register('name', { required: true, pattern: patternName })}
        />
        {formState.errors.name && <ErrorInput>{errorName}</ErrorInput>}
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          {...register('number', { required: true, pattern: patternNumber })}
        />
        {formState.errors.number && <ErrorInput>{errorNumber}</ErrorInput>}
      </Label>
      <Button type="submit" />
    </FormWrapper>
  );
};
