import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "redux/selectors";


export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
  
  return (
   <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContacts />
      {isLoading && !error && <b>Request in progress...</b>}
         <ContactsList/>
        <GlobalStyle />
      </Layout>
  );
};
