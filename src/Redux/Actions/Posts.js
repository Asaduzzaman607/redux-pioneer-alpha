import { UPDATE } from "../Constants/ActionTypes";
import {CREATE, UPDATE, DELETE, FETCH_ALL } from "../Constants/ActionTypes";

import * as api from "../API";

export const getPosts = () = async (dispatch) =>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({
            type:FETCH_ALL, payload: data
        })
    }
        catch(err) {
            console.log(err.message);
        }
    }
    export const createPost = (post) = async (dispatch) =>{
        try {
            const {data} = await api.createPost(post);
            dispatch({
                type:CREATE, payload: data
            })
        }
            catch(err) {
                console.log(err.message);
            }
        }
        export const updatePost = (id, post) = async (dispatch) =>{
            try {
                const {data} = await api.updatePost(id, post);
                dispatch({
                    type:UPDATE, payload: data
                })
            }
                catch(err) {
                    console.log(err.message);
                }
            }
            export const deletePost = (id) = async (dispatch) =>{
                try {
                    const {data} = await api.deletePost(id);
                    dispatch({
                        type:DELETE, payload: data
                    })
                }
                    catch(err) {
                        console.log(err.message);
                    }
                }
