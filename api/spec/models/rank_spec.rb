require 'rails_helper'

RSpec.describe Rank, type: :model do
  it "calculates 1000 rank's stamina" do
    rank = Rank.find(1000)
    expect(rank.stamina).to eq(516)
  end

  it "gets 1000 rank's experience" do
    rank = Rank.find(1000)
    expect(rank.experience).to eq(4412261161)
  end

  it "calculates 1001 rank's stamina" do
    rank = Rank.find(1001)
    expect(rank.stamina).to eq(517)
  end

  it "gets rank's experience" do
    rank = Rank.find(1001)
    expect(rank.experience).to eq(4532317786)
  end
end