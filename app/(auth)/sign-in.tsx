import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { signIn } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const handleSignIn = async () => {
    if (!email || !password) {
      return Alert.alert("Error", "Please fill in all fields");
    }
    setIsSubmitting(true);
    try {
      await signIn({
        email,
        password,
      });
      Alert.alert("Success", "Sign in successful");
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
        title="Sign In"
        style="w-full mt-4"
        onPress={handleSignIn}
        isLoading={isSubmitting}
        textStyle="text-white"
      />
      <View className="flex flex-row justify-center gap-2 mt-5">
        <Text className="base-regular text-gray-100">
          Don&#39;t have an account?
        </Text>
        <Link href="/sign-up" className="base-bold text-primary">
          <Text>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
