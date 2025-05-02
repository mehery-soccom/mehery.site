// src/firebase/index.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQZl0W_338XMQnxQYSqCs_e5taNQRd_Zo",

    authDomain: "mehery-6c223.firebaseapp.com",

    projectId: "mehery-6c223",

    storageBucket: "mehery-6c223.firebasestorage.app",

    messagingSenderId: "585106041639",

    appId: "1:585106041639:web:714f6a900aad03d952d702",

    measurementId: "G-VCVRH2HN1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const blogService = {
    async getPosts() {
        try {
            const querySnapshot = await getDocs(collection(db, "blogPosts"));
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error("Error getting posts:", error);
            alert("Error loading blog posts: " + error.message);
            return [];
        }
    },

    async savePost(post) {
        try {
            if (post.image && post.image.length > 900000) {
                alert("Image is too large. Please choose a smaller image (< 900KB)");
                return null;
            }

            const newPost = {
                title: post.title,
                content: post.content,
                author: post.author,
                date: post.date || new Date().toLocaleDateString(),
                image: post.image,
                timestamp: Date.now()
            };

            console.log("Saving post to Firestore:", newPost.title);
            const docRef = await addDoc(collection(db, "blogPosts"), newPost);
            console.log("Post saved with ID:", docRef.id);
            return { id: docRef.id, ...newPost };
        } catch (error) {
            console.error("Error saving post:", error);
            alert("Error saving post: " + error.message);
            throw error;
        }
    },

    async deletePost(id) {
        try {
            console.log("Deleting post with ID:", id);
            await deleteDoc(doc(db, "blogPosts", id));
            console.log("Post deleted successfully");
            return true;
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Error deleting post: " + error.message);
            throw error;
        }
    }
};

export const faqService = {
    async getFaqs() {
        try {
            const querySnapshot = await getDocs(collection(db, "faqs"));
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                isOpen: false
            }));
        } catch (error) {
            console.error("Error getting FAQs:", error);
            return [];
        }
    },

    async saveFaq(faq) {
        try {
            const newFaq = {
                title: faq.title,
                content: faq.content,
                timestamp: Date.now()
            };
            const docRef = await addDoc(collection(db, "faqs"), newFaq);
            console.log("FAQ saved with ID:", docRef.id);
            return { id: docRef.id, ...newFaq };
        } catch (error) {
            console.error("Error saving FAQ:", error);
            alert("Error saving FAQ: " + error.message);
            throw error;
        }
    },

    async deleteFaq(id) {
        try {
            await deleteDoc(doc(db, "faqs", id));
            return true;
        } catch (error) {
            console.error("Error deleting FAQ:", error);
            alert("Error deleting FAQ: " + error.message);
            throw error;
        }
    }
};

// Simple auth not working tho
export const authService = {
    login(username, password) {
        const validUsername = "admin";
        const validPassword = "blog123";

        return new Promise((resolve, reject) => {
            if (username === validUsername && password === validPassword) {
                localStorage.setItem("isLoggedIn", "true");
                resolve(true);
            } else {
                reject(new Error("Invalid credentials"));
            }
        });
    },

    logout() {
        localStorage.removeItem("isLoggedIn");
        return Promise.resolve(true);
    },

    isLoggedIn() {
        return localStorage.getItem("isLoggedIn") === "true";
    }
};

export { db };
