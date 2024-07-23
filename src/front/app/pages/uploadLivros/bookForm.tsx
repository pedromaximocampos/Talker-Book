import React, { FormEvent, useRef, useState, ChangeEvent } from 'react';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import { FaImage, FaFileDownload } from 'react-icons/fa';
import { FaCloudArrowDown, FaCloudArrowUp } from 'react-icons/fa6';
import { BookCadastro } from '@/app/interfaces/Book';
import { createBookAction } from './action';
import ErrorModal from '@/app/modals/ErrorModal';
import SuccessModal from '@/app/modals/SucessModal';

interface BookFormProps {
  setResponse: (response: any) => void;
}

function BookForm({ setResponse }: BookFormProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [book, setBook] = useState<BookCadastro>({
    title: '',
    category: '',
    isbn: '',
    description: '',
    pages: 0,
    language: '',
    author: '',
    publisher: '',
    publicationDate: '',
    coverImageLink: '',
    pdfLink: ''
  });

  const [formResponse, setFormResponse] = useState<{ success: boolean | undefined; message: string | undefined }>({ success: undefined, message: undefined });

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, key: keyof BookCadastro) => {
    setBook({ ...book, [key]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const createBookResponse = await createBookAction(new FormData(event.currentTarget));
    setFormResponse({
      success: createBookResponse.success,
      message: createBookResponse.message
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {['Título', 'Categoria', 'Autor', 'ISBN', 'Descrição', 'Editora', 'Data de Publicação', 'Páginas', 'Preço', 'Linguagem'].map((label, index) => (
            <Input
              required={true}
              key={index}
              label={label}
              id={label.toLowerCase().replace(/\s+/g, '')}
              type={index === 6 ? 'date' : index === 7 || index === 8 ? 'number' : 'text'}
              value={book[label.toLowerCase().replace(/\s+/g, '') as keyof BookCadastro]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, label.toLowerCase().replace(/\s+/g, '') as keyof BookCadastro)}
            />
          ))}
        </div>
        <div className="flex justify-between space-x-4">
          <Button
            color='blue'
            label={
              <div className='flex items-center justify-center'>
                <input ref={imgInputRef} type='file' className='hidden' onChange={handleImgBookChange} />
                <FaImage />
                <label htmlFor='imgBook' className='ml-1'>Capa do Livro</label>
              </div>
            }
            onClick={handleImgButtonClick}
          />
          <Button
            color='blue'
            label={
              <div className='flex items-center justify-center'>
                <input ref={fileInputRef} type='file' className='hidden' onChange={handleFileChange} />
                <FaCloudArrowUp />
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
          color='blue'
          label={
            <div className='flex items-center justify-center'>
              <FaCloudArrowDown />
              <span className='ml-1'>Adicionar livro</span>
            </div>
          }
        />
      </form>
      {/* MODAL DE SUCESSO */}
      <SuccessModal
        isOpen={formResponse.success === true}
        title={'Livro adicionado com sucesso!'}
        message={'Seu livro foi adicionado com sucesso.'}
        onClose={() => {
          setResponse(formResponse);
          setFormResponse({ success: undefined, message: undefined });
        }}
      />

      {/* MODAL DE ERRO */}
      <ErrorModal
       title='Erro ao criar livro'
        message={formResponse.message || "Ocorreu um erro ao adicionar o livro."}
        isOpen={formResponse.success === false}
        onClose={() => {
          setResponse(formResponse);
          setFormResponse({ success: undefined, message: undefined });
        }}
      />
    </>
  );
}

export default BookForm;
