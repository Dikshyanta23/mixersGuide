import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

const rateURL = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {

    toast.success('Thank you for your feedback');
    return redirect('/');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation()
  const isbeingSubmitted = navigation.state === 'submitting'
  return (
    <Form className="form" method="POST">
      <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {' '}
        Rate the Cocktail
      </h3>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          placeholder="John Doe"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="drink" className="form-label">
          Your Cocktail
        </label>
        <input
          type="text"
          className="form-input"
          name="drink"
          id="drink"
          placeholder="Margarita"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="rating" className="form-label">
          rating
        </label>
        <input
          type="text"
          className="form-input"
          name="rating"
          id="rating"
          placeholder="6"
          required
        />
      </div>
      <button
        style={{ marginTop: '0.5rem' }}
        type="submit"
        className="btn btn-block"
        disabled={isbeingSubmitted}
      >
        {isbeingSubmitted ? 'Submitting' : 'Submit'}
      </button>
    </Form>
  );
}

export default Newsletter
