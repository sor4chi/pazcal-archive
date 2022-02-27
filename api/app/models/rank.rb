class Rank < ApplicationRecord
    def stamina
        return ((self.id + 1) / 2).to_i + 16
    end
end
