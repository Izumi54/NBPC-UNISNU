'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import FadeInSection from '@/components/animations/FadeInSection';

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: '',
    institution: '',
    category: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    leaderStudentId: '',
    members: [
      { name: '', email: '', studentId: '' },
      { name: '', email: '', studentId: '' }
    ],
    agreeTerm: false,
    file: null,
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    if (stepNumber === 1) {
      if (!formData.teamName) newErrors.teamName = 'Nama tim wajib diisi';
      if (!formData.institution) newErrors.institution = 'Nama institusi wajib diisi';
      if (!formData.category) newErrors.category = 'Kategori lomba wajib dipilih';
    } else if (stepNumber === 2) {
      if (!formData.leaderName) newErrors.leaderName = 'Nama ketua tim wajib diisi';
      if (!formData.leaderEmail) newErrors.leaderEmail = 'Email ketua tim wajib diisi';
      else if (!/\S+@\S+\.\S+/.test(formData.leaderEmail)) newErrors.leaderEmail = 'Format email tidak valid';
      if (!formData.leaderPhone) newErrors.leaderPhone = 'Nomor telepon ketua tim wajib diisi';
      if (!formData.leaderStudentId) newErrors.leaderStudentId = 'NIM ketua tim wajib diisi';
    } else if (stepNumber === 3) {
      // Validasi anggota tim minimal 2 orang
      const validMembers = formData.members.filter(member => member.name && member.email && member.studentId);
      if (validMembers.length < 2) {
        newErrors.members = 'Minimal 2 anggota tim wajib diisi lengkap';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('member-')) {
      const [prefix, index, field] = name.split('-');
      const newMembers = [...formData.members];
      newMembers[parseInt(index)][field] = value;
      setFormData({ ...formData, members: newMembers });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  const addMember = () => {
    if (formData.members.length < 4) {
      setFormData({
        ...formData,
        members: [...formData.members, { name: '', email: '', studentId: '' }]
      });
    }
  };

  const removeMember = (index) => {
    if (formData.members.length > 2) {
      const newMembers = [...formData.members];
      newMembers.splice(index, 1);
      setFormData({ ...formData, members: newMembers });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.agreeTerm) {
      setErrors({ ...errors, agreeTerm: 'Anda harus menyetujui syarat dan ketentuan' });
      return;
    }
    
    if (!formData.file) {
      setErrors({ ...errors, file: 'Proposal wajib diunggah' });
      return;
    }
    
    // Simulasi pengiriman data ke server
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-20 bg-gradient-primary">
        <div className="container-custom">
          <AnimatedTitle
            title="Pendaftaran NBPC"
            subtitle="Ikuti langkah-langkah pendaftaran berikut untuk berpartisipasi dalam kompetisi"
            textColor="text-white"
            align="center"
            size="xl"
          />
        </div>
      </section>

      {/* Registration Progress */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="flex justify-between relative max-w-4xl mx-auto mb-8">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            {/* Progress Steps */}
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="relative z-10 flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${step >= stepNumber ? 'bg-primary-blue text-white' : 'bg-gray-200 text-gray-500'}
                    ${step === stepNumber ? 'ring-4 ring-primary-blue/20' : ''}
                  `}
                >
                  {stepNumber}
                </div>
                <p className={`mt-2 text-sm ${step >= stepNumber ? 'text-primary-blue font-medium' : 'text-gray-500'}`}>
                  {stepNumber === 1 && 'Tim'}
                  {stepNumber === 2 && 'Ketua'}
                  {stepNumber === 3 && 'Anggota'}
                  {stepNumber === 4 && 'Submit'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section bg-light-gray">
        <div className="container-custom">
          {!isSubmitted ? (
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Tim Info */}
                {step === 1 && (
                  <FadeInSection>
                    <div className="bg-white rounded-lg shadow-soft p-8">
                      <h2 className="heading-md mb-6">Informasi Tim</h2>
                      
                      <div className="space-y-6">
                        {/* Nama Tim */}
                        <div>
                          <label htmlFor="teamName" className="block mb-2 font-medium">
                            Nama Tim <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50
                              ${errors.teamName ? 'border-red-500' : 'border-gray-300'}
                            `}
                            placeholder="Masukkan nama tim"
                          />
                          {errors.teamName && (
                            <p className="mt-1 text-red-500 text-sm">{errors.teamName}</p>
                          )}
                        </div>
                        
                        {/* Institusi */}
                        <div>
                          <label htmlFor="institution" className="block mb-2 font-medium">
                            Institusi <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50
                              ${errors.institution ? 'border-red-500' : 'border-gray-300'}
                            `}
                            placeholder="Masukkan nama institusi"
                          />
                          {errors.institution && (
                            <p className="mt-1 text-red-500 text-sm">{errors.institution}</p>
                          )}
                        </div>
                        
                        {/* Kategori Lomba */}
                        <div>
                          <label htmlFor="category" className="block mb-2 font-medium">
                            Kategori Lomba <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50
                              ${errors.category ? 'border-red-500' : 'border-gray-300'}
                            `}
                          >
                            <option value="">Pilih kategori lomba</option>
                            <option value="tech">Teknologi Digital</option>
                            <option value="social">Sosial & Lingkungan</option>
                            <option value="product">Produk & Jasa</option>
                            <option value="creative">Kreatif & Budaya</option>
                            <option value="culinary">Kuliner & Agribisnis</option>
                            <option value="open">Open Category</option>
                          </select>
                          {errors.category && (
                            <p className="mt-1 text-red-500 text-sm">{errors.category}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-8 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="btn-primary"
                        >
                          Selanjutnya
                        </button>
                      </div>
                    </div>
                  </FadeInSection>
                )}
                
                {/* Step 2: Ketua Tim */}
                {step === 2 && (
                  <FadeInSection>
                    <div className="bg-white rounded-lg shadow-soft p-8">
                      <h2 className="heading-md mb-6">Informasi Ketua Tim</h2>
                      
                      <div className="space-y-6">
                        {/* Nama Ketua */}
                        <div>
                          <label htmlFor="leaderName" className="block mb-2 font-medium">
                            Nama Lengkap <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="leaderName"
                            name="leaderName"
                            value={formData.leaderName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50
                              ${errors.leaderName ? 'border-red-500' : 'border-gray-300'}
                            `}
                            placeholder="Masukkan nama lengkap"
                          />
                          {errors.leaderName && (
                            <p className="mt-1 text-red-500 text-sm">{errors.leaderName}</p>
                          )}
                        </div>
                        
                        {/* Email Ketua */}
                        <div>
                          <label htmlFor="leaderEmail" className="block mb-2 font-medium">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="leaderEmail"
                            name="leaderEmail"
                            value={formData.leaderEmail}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50
                              ${errors.leaderEmail ? 'border-red-500' : 'border-gray-300'}
                            `}
                            placeholder="Masukkan alamat email"
                          />
                          {errors.leaderEmail && (
                            <p className="mt-1 text-red-500 text-sm">{errors.leaderEmail}</p>
                          )}
                        </div>
                        
                        {/* Phone Ketua */}
                        <div>
                          <label htmlFor="leaderPhone" className="block mb-2 font-medium">
                            Nomor Telepon <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="leaderPhone"
                            name="leaderPhone"
                            value={formData.leaderPhone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50
                              ${errors.leaderPhone ? 'border-red-500' : 'border-gray-300'}
                            `}
                            placeholder="Masukkan nomor telepon"
                          />
                          {errors.leaderPhone && (
                            <p className="mt-1 text-red-500 text-sm">{errors.leaderPhone}</p>
                          )}
                        </div>
                        
                        {/* NIM Ketua */}
                        <div>
                          <label htmlFor="leaderStudentId" className="block mb-2 font-medium">
                            NIM / Nomor Induk Mahasiswa <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="leaderStudentId"
                            name="leaderStudentId"
                            value={formData.leaderStudentId}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50
                              ${errors.leaderStudentId ? 'border-red-500' : 'border-gray-300'}
                            `}
                            placeholder="Masukkan NIM"
                          />
                          {errors.leaderStudentId && (
                            <p className="mt-1 text-red-500 text-sm">{errors.leaderStudentId}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-8 flex justify-between">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          Kembali
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="btn-primary"
                        >
                          Selanjutnya
                        </button>
                      </div>
                    </div>
                  </FadeInSection>
                )}
                
                {/* Step 3: Anggota Tim */}
                {step === 3 && (
                  <FadeInSection>
                    <div className="bg-white rounded-lg shadow-soft p-8">
                      <h2 className="heading-md mb-6">Informasi Anggota Tim</h2>
                      
                      {errors.members && (
                        <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-200 flex items-start">
                          <FiAlertCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-red-700 text-sm">{errors.members}</p>
                        </div>
                      )}
                      
                      <div className="space-y-8">
                        {formData.members.map((member, index) => (
                          <div key={index} className="p-6 border border-gray-200 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="font-semibold">Anggota {index + 1}</h3>
                              {index >= 2 && (
                                <button
                                  type="button"
                                  onClick={() => removeMember(index)}
                                  className="text-red-500 text-sm hover:underline"
                                >
                                  Hapus
                                </button>
                              )}
                            </div>
                            
                            <div className="space-y-4">
                              {/* Nama Anggota */}
                              <div>
                                <label htmlFor={`member-${index}-name`} className="block mb-2 font-medium">
                                  Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  id={`member-${index}-name`}
                                  name={`member-${index}-name`}
                                  value={member.name}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50"
                                  placeholder="Masukkan nama lengkap"
                                />
                              </div>
                              
                              {/* Email Anggota */}
                              <div>
                                <label htmlFor={`member-${index}-email`} className="block mb-2 font-medium">
                                  Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="email"
                                  id={`member-${index}-email`}
                                  name={`member-${index}-email`}
                                  value={member.email}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50"
                                  placeholder="Masukkan alamat email"
                                />
                              </div>
                              
                              {/* NIM Anggota */}
                              <div>
                                <label htmlFor={`member-${index}-studentId`} className="block mb-2 font-medium">
                                  NIM / Nomor Induk Mahasiswa <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  id={`member-${index}-studentId`}
                                  name={`member-${index}-studentId`}
                                  value={member.studentId}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50"
                                  placeholder="Masukkan NIM"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {formData.members.length < 4 && (
                        <button
                          type="button"
                          onClick={addMember}
                          className="mt-4 text-primary-blue font-medium hover:underline flex items-center"
                        >
                          + Tambah anggota lain (maks. 4 anggota)
                        </button>
                      )}
                      
                      <div className="mt-8 flex justify-between">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          Kembali
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="btn-primary"
                        >
                          Selanjutnya
                        </button>
                      </div>
                    </div>
                  </FadeInSection>
                )}
                
                {/* Step 4: Submit Proposal */}
                {step === 4 && (
                  <FadeInSection>
                    <div className="bg-white rounded-lg shadow-soft p-8">
                      <h2 className="heading-md mb-6">Upload Proposal</h2>
                      
                      <div className="space-y-6">
                        {/* File Upload */}
                        <div>
                          <label className="block mb-2 font-medium">
                            Proposal Bisnis (PDF) <span className="text-red-500">*</span>
                          </label>
                          <div 
                            className={`border-2 border-dashed rounded-lg p-8 text-center
                              ${errors.file ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-primary-blue hover:bg-blue-50'}
                              transition-colors cursor-pointer
                            `}
                            onClick={() => document.getElementById('proposal').click()}
                          >
                            <input
                              type="file"
                              id="proposal"
                              name="proposal"
                              accept=".pdf"
                              className="hidden"
                              onChange={handleFileChange}
                            />
                            <FiUpload className="mx-auto mb-4 text-gray-400" size={36} />
                            {formData.file ? (
                              <div>
                                <p className="text-primary-blue font-medium">{formData.file.name}</p>
                                <p className="text-gray-500 text-sm mt-1">Klik untuk mengganti file</p>
                              </div>
                            ) : (
                              <div>
                                <p className="font-medium">Klik untuk upload proposal</p>
                                <p className="text-gray-500 text-sm mt-1">Format PDF, maks. 10MB</p>
                              </div>
                            )}
                          </div>
                          {errors.file && (
                            <p className="mt-1 text-red-500 text-sm">{errors.file}</p>
                          )}
                        </div>
                        
                        {/* Terms and Conditions */}
                        <div className="mt-6">
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              id="agreeTerm"
                              name="agreeTerm"
                              checked={formData.agreeTerm}
                              onChange={handleChange}
                              className="mt-1 mr-3"
                            />
                            <label htmlFor="agreeTerm" className="text-sm">
                              Saya menyetujui <a href="#" className="text-primary-blue hover:underline">syarat dan ketentuan</a> NBPC dan menyatakan bahwa semua informasi yang diberikan adalah benar.
                            </label>
                          </div>
                          {errors.agreeTerm && (
                            <p className="mt-1 text-red-500 text-sm">{errors.agreeTerm}</p>
                          )}
                        </div>
                        
                        <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                          <div className="flex">
                            <FiAlertCircle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-yellow-700 font-medium">Informasi Pembayaran</p>
                              <p className="text-yellow-700 text-sm mt-1">
                                Setelah mendaftar, tim Anda akan menerima email berisi instruksi pembayaran biaya pendaftaran Rp 250.000/tim dalam waktu 24 jam.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 flex justify-between">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          Kembali
                        </button>
                        <button
                          type="submit"
                          className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Memproses...' : 'Daftar Sekarang'}
                        </button>
                      </div>
                    </div>
                  </FadeInSection>
                )}
              </form>
            </div>
          ) : (
            <FadeInSection>
              <div className="bg-white rounded-lg shadow-soft p-8 max-w-xl mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <FiCheckCircle size={40} className="text-green-500" />
                </div>
                <h2 className="heading-md text-green-700 mb-4">Pendaftaran Berhasil!</h2>
                <p className="mb-8">
                  Terima kasih {formData.leaderName} telah mendaftarkan tim {formData.teamName} dalam NBPC 2025. Kami telah mengirimkan email konfirmasi ke {formData.leaderEmail} dengan detail pendaftaran dan instruksi pembayaran.
                </p>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-8 text-left">
                  <p className="font-medium text-primary-blue mb-2">Langkah selanjutnya:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Cek email untuk instruksi pembayaran</li>
                    <li>Lakukan pembayaran dalam waktu 48 jam</li>
                    <li>Kirim bukti pembayaran melalui email</li>
                    <li>Tunggu konfirmasi dari panitia</li>
                  </ol>
                </div>
                
                <a 
                  href="/"
                  className="btn-primary inline-block"
                >
                  Kembali ke Beranda
                </a>
              </div>
            </FadeInSection>
          )}
        </div>
      </section>
    </>
  );
} 