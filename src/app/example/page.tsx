import { Button, Card, Header, Footer } from '@/components';

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            组件示例页面
          </h1>
          <p className="text-xl text-gray-600">
            这里展示了如何使用创建的可重用组件
          </p>
        </div>
        
        {/* 按钮示例 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">按钮组件</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              主要按钮 (小)
            </Button>
            <Button variant="primary" size="md">
              主要按钮 (中)
            </Button>
            <Button variant="primary" size="lg">
              主要按钮 (大)
            </Button>
            <Button variant="secondary">
              次要按钮
            </Button>
            <Button variant="outline">
              轮廓按钮
            </Button>
            <Button disabled>
              禁用按钮
            </Button>
          </div>
        </div>
        
        {/* 卡片示例 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">卡片组件</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="sm" shadow="sm">
              <h3 className="text-lg font-semibold mb-2">小卡片</h3>
              <p className="text-gray-600">这是一个小尺寸的卡片示例。</p>
            </Card>
            
            <Card padding="md" shadow="md">
              <h3 className="text-lg font-semibold mb-2">中等卡片</h3>
              <p className="text-gray-600">这是一个中等尺寸的卡片示例。</p>
              <div className="mt-4">
                <Button variant="primary" size="sm">
                  了解更多
                </Button>
              </div>
            </Card>
            
            <Card padding="lg" shadow="lg">
              <h3 className="text-lg font-semibold mb-2">大卡片</h3>
              <p className="text-gray-600">这是一个大尺寸的卡片示例，包含更多内容。</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• 功能特点 1</li>
                <li>• 功能特点 2</li>
                <li>• 功能特点 3</li>
              </ul>
              <div className="mt-6 flex gap-2">
                <Button variant="primary" size="sm">
                  开始使用
                </Button>
                <Button variant="outline" size="sm">
                  查看详情
                </Button>
              </div>
            </Card>
          </div>
        </div>
        
        {/* 响应式网格示例 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">响应式布局</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} className="text-center">
                <div className="text-2xl mb-2">📱</div>
                <h4 className="font-medium">项目 {item}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  响应式网格项目
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 