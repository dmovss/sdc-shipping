import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Обязательное поле'),
    email: Yup.string().email('Некорректный email').required('Обязательное поле'),
    message: Yup.string().required('Обязательное поле'),
  });

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Свяжитесь с нами</h2>
        <div className="max-w-2xl mx-auto">
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, handleSubmit }) => (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Имя</label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Сообщение</label>
                  <Field
                    as="textarea"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Отправить сообщение
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;