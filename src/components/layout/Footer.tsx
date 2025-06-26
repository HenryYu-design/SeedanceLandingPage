import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">WaveSpeed Seedance</h3>
            <p className="text-gray-400 text-sm">
              为您提供最优质的服务体验
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-md font-medium">快速链接</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">关于我们</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">服务</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-md font-medium">服务</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">网站开发</a></li>
              <li><a href="#" className="hover:text-white transition-colors">移动应用</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX设计</a></li>
              <li><a href="#" className="hover:text-white transition-colors">咨询服务</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-md font-medium">联系方式</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>邮箱: info@wavespeed.com</p>
              <p>电话: +86 123 4567 8900</p>
              <p>地址: 北京市朝阳区XXX路XXX号</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 WaveSpeed Seedance. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
} 