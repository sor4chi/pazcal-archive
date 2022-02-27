require 'rails_helper'

RSpec.describe "Ranks", type: :request do
  describe "GET /api/v1/ranks" do
    before do
      get 'http://localhost/api/v1/ranks'
    end

    it "responds successfully" do
      expect(response).to be_successful
    end

    it "returns a 200 response" do
      expect(response).to have_http_status "200"
    end

    it 'returns a correct API acquired' do
      expect(JSON.parse(response.body)[0]["rank"]).to eq(1)
      expect(JSON.parse(response.body)[0]["experience"]).to eq(0)
      expect(JSON.parse(response.body)[0]["stamina"]).to eq(17)
    end
  end
end
