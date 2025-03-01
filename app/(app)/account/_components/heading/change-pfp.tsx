"use client";

import React, { useCallback } from "react";

import { Button } from "@/components/ui";

import { uploadImage } from "@/services/storage";

import type { User } from "@privy-io/react-auth";

interface Props {
    user: User;
    isUploading: boolean;
    setIsUploading: (isUploading: boolean) => void;
}

const ChangePfp: React.FC<Props> = ({ user, isUploading, setIsUploading }) => {

    const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files[0]) return;
        
        try {
            setIsUploading(true);
            const file = e.target.files[0];
            const newFileName = `${user?.id}`;
            
            const renamedFile = new File([file], newFileName, { type: file.type });
            await uploadImage(renamedFile);
            setIsUploading(false);
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
            setIsUploading(false);
        }
    }, [user?.id]);

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
                id="pfp-upload"
            />
            <label htmlFor="pfp-upload">
                <Button 
                    disabled={isUploading} 
                    asChild
                    variant="outline"
                >
                    <span>
                        {isUploading ? 'Uploading...' : 'Change Profile Picture'}
                    </span>
                </Button>
            </label>
        </div>
    );
};

export default ChangePfp;
