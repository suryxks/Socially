import React from "react";
import toast, { Toaster } from 'react-hot-toast';

export const Toast = () => {
    return <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
            duration: 5000,
            success: {
                iconTheme: {
                    primary: 'white',
                    secondary: 'black',
                  },
              style: {
                background: 'green',
                color: "white",
              },
            },
            error: {
                iconTheme: {
                    primary: 'white',
                    secondary: 'black',
                  },
              style: {
                background: 'red',
                color:'white'
              },
            },
          }}
    />
}