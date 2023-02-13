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
import { patternName, patternNumber, errorName, errorNumber } from 'utils';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Notification } from 'utils';

export const ContactForm = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      phone: yup.number().positive().integer().required(),
    })
    .required();

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onFormSubmit = ({ name, phone }) => {
    const isFindName = contacts.find(state => state.name === name);
    if (isFindName) {
      Notification(name);
      reset();
      return;
    }

    dispatch(addContact({ name, phone }));
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
      <Label htmlFor="phone">
        Phone number
        <Input
          {...register('phone', { required: true, pattern: patternNumber })}
        />
        {formState.errors.phone && <ErrorInput>{errorNumber}</ErrorInput>}
      </Label>
      <Button type="submit" />
    </FormWrapper>
  );
};
