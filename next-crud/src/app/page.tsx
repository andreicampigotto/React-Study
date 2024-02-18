"use client";

import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Form from "@/components/Form";
import Customer from "@/core/Customer";
import CustomerRepository from "@/core/CustomerRepository";
import CustomerCollection from "@/backend/db/CustomerCollection";
import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db} from '../backend/config';


export default function Home() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      // setErrorMessage(""); 
    } catch (error) {
      console.error(error);
      // setErrorMessage("Falha no login. Verifique seu e-mail e senha e tente novamente.");
    }
  };

  {!user ? (
    <div>
      <input
        type="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        placeholder="Senha"
      />
      <button onClick={loginUser}>Entrar</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>

  )

  const repo: CustomerRepository = new CustomerCollection();

  const [visible, setVisible] = useState<"table" | "form">("table");
  const [customer, setCustomer] = useState<Customer>(Customer.empty);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((customers) => {
      setCustomers(customers);
      setVisible("table");
    });
  }

  function selectedCustomer(customer: Customer) {
    setCustomer(customer);
    setVisible("form");
  }

  async function deleteCustomer(customer: Customer) {
    await repo.delete(customer)
    getAll()
    console.log('passou aqui')
  }

  async function saveCustomer(customer: Customer) {
    repo.save(customer);
    console.log('passou um aviao')
    getAll()
  }

  function newCustomer() {
    setCustomer(Customer.empty());
    setVisible("form");
  }

  return (
    <div
      className={`
    flex 
    h-screen
    justify-center 
    items-center 
    bg-gradient-to-r from-indigo-400 to-blue-600
   `}
    >
      <Layout title="Simple registration">
        {visible === "table" ? (
          <>
            <div className="mb-7">
              <div className="flex justify-end">
                <Button color="bg-green-400" onClick={newCustomer}>
                  New Customer
                </Button>
              </div>

              <Table
                customers={customers}
                selectedCustomer={selectedCustomer}
                deletedCustomer={deleteCustomer}
              />
            </div>
          </>
        ) : (
          <Form
            customer={customer}
            canceled={() => setVisible("table")}
            customerChange={saveCustomer}
          ></Form>
        )}
      </Layout>
    </div>
  );
}
