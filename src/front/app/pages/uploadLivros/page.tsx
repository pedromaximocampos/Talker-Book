"use client";
import React, { FormEvent, useRef, useState } from 'react';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import { FaImage, FaFileDownload, FaCheckCircle } from 'react-icons/fa';
import { FaCloudArrowDown } from 'react-icons/fa6';
import ErrorModal from '@/app/modals/ErrorModal';
import SuccessModal from '@/app/modals/SucessModal';
import signInAction from '../signIn/action';
import ToggleSideBar from '@/app/components/ToggleSideBar';
import protectedPage from '../protectedPage/page';

interface Response {
  success: boolean | undefined;
  message: string | undefined;
}

function Page() {

  const [response, setResponse] = useState<Response>({ success: undefined, message: undefined });
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files![0].name);
  };

  const handleImgBookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImg(e.target.files?.[0]?.name ?? '');
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImgButtonClick = () => {
    imgInputRef.current?.click();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createBookResponse = await signInAction(new FormData(event.currentTarget));

    setResponse(createBookResponse as Response);
  };


  protectedPage();
  return (
    <div className='flex justify-between'>
      <ToggleSideBar />
      <div className="mt-20 flex flex-col justify-center items-center w-full">
        <header className="font-extrabold text-blue-950 text-4xl mt-8 mb-4">Adicionar Livro</header>
        <div className="max-w-5xl mt-10 w-full bg-white rounded-md shadow-blue-200  shadow-xl border border-blue-300  p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-3 gap-x-4 gap-y-4">
              {['Título', 'Categoria', 'Autor', 'ISBN', 'Descrição', 'Editora', 'Data de Publicação', 'Páginas', 'Linguagem'].map((label, index) => (
                <Input
                  required={true}
                  key={index}
                  label={label}
                  id={label.toLowerCase().replace(/\s+/g, '')}
                  type={index === 6 ? 'date' : index === 7 || index === 8 ? 'number' : 'text'}
                />
              ))}
            </div>
            <div className="flex mt-15 justify-between space-x-4">
              <Button
                color='gradient'
                label={
                  <div className='flex items-center justify-center'>
                    <input ref={imgInputRef} type='file' accept="image/*" className='hidden' onChange={handleImgBookChange} />
                    <FaImage />
                    <label htmlFor='imgBook' className='ml-1'>Capa do Livro</label>
                  </div>
                }
                onClick={handleImgButtonClick}
              />
              <Button
                color='gradient'
                label={
                  <div className='flex items-center justify-center'>
                    <input ref={fileInputRef} type='file'accept="application/pdf" className='hidden' onChange={handleFileChange} />
                    <FaFileDownload />
                    <label htmlFor='pdf' className='ml-1'>Selecionar PDF</label>
                  </div>
                }
                onClick={handleFileButtonClick}
              />
            </div>
            <div className='bg-blue-100 p-3' style={{ display: selectedFile || selectedImg ? 'block' : 'none' }}>
              {selectedFile &&
                <p className='font-bold'>Arquivo selecionado: 
                  <label className='font-normal'>
                    {selectedFile}
                  </label>
                </p>
              }
              {selectedImg &&
                <p className='font-bold'>
                  Imagem selecionada:
                  <label className='font-normal'>
                    {selectedImg}
                  </label>
                </p>
              }
            </div>
            <Button
              type='submit'
              color='gradientDark'
              label={
                <div className='flex items-center justify-center'>
                  <FaCloudArrowDown />
                  <span className='ml-1'>Adicionar livro</span>
                </div>
              }
              onClick={() => { }}
            />
          </form>
        </div>
      </div>

      <SuccessModal
        isOpen={response.success == true}
        onClose={async () => setResponse({ success: undefined, message: undefined })}
        title={'Sucesso'}
        message={'Livro adicionado a plataforma com sucesso!'}
      />

      <ErrorModal
        isOpen={response.success == false}
        onClose={async () => setResponse({ success: undefined, message: undefined })}
        title={'Erro ao criar livro'}
        message={response.message || "Verifique os dados e tente novamente."}
      />

    </div>
  );
}

export default Page;