import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { createUser } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = form;

  const handleSignIn = async () => {
    if (!name || !email || !password) {
      return Alert.alert("Error", "Please fill in all fields");
    }
    setIsSubmitting(true);
    try {
      await createUser({
        name,
        email,
        password,
      });
      Alert.alert("Success", "Sign up successful");
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      {/* Main content area */}
      <CustomInput
        label="Name"
        value={name}
        onChangeText={(text) => setForm({ ...form, name: text })}
        placeholder="Enter your name"
      />
      <CustomInput
        label="Email"
        value={email}
        onChangeText={(text) => setForm({ ...form, email: text })}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <CustomInput
        label="Password"
        value={password}
        onChangeText={(text) => setForm({ ...form, password: text })}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <CustomButton
        title="Sign Up"
        style="w-full mt-4"
        onPress={handleSignIn}
        isLoading={isSubmitting}
        textStyle="text-white"
      />
      <View className="flex flex-row justify-center gap-2 mt-5">
        <Text className="base-regular text-gray-100">
          Already have an account?
        </Text>
        <Link href="/sign-in" className="base-bold text-primary">
          <Text>Sign In</Text>
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
